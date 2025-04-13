import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NameService } from "../../services/name.service";

const MAX_NAME_CHARS_BEFORE_SCALING = 8;
const MIN_FULLSCREEN_SIZE = 1025;

@Component({
    selector: 'app-name',
    templateUrl: './name.component.html',
    styleUrl: './name.component.scss'
})
export class NameComponent implements OnInit, OnDestroy {
    names: string[] = [];
    shuffledNames: string[] = [];

    constructor(
        private nameService: NameService,
        private cdRef: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        window.addEventListener('resize', this.onResize.bind(this));

        this.nameService.getNames().subscribe((names) => {
            this.names = names;
            this.shuffleNames();
        });
    }

    ngOnDestroy() {
        window.removeEventListener('resize', this.onResize.bind(this));
    }

    onResize() {
        this.cdRef.detectChanges();
    }

    sendNames(selectedName: string, names: string[]) {
        this.nameService.postNames(selectedName, names)
            .subscribe(response => {
                console.log('Response from backend:', response);
            });
    }

    shuffleNames(): void {
        this.shuffledNames = [...this.names];

        for (let i = this.shuffledNames.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.shuffledNames[i], this.shuffledNames[j]] = [this.shuffledNames[j], this.shuffledNames[i]];
        }
    }

    get isSmallScreen(): boolean {
        return window.innerWidth < MIN_FULLSCREEN_SIZE;
    }

    get rowsCols(): [number, number] {
        const n = this.names.length;

        if (this.isSmallScreen) {
            if (n < 5) {
                return [n, 1]
            }
            // Mobile: prefer 2 columns, more rows
            const cols = 2;
            const rows = Math.ceil(n / cols);
            return [rows, cols];
        }

        // Desktop: Try to make square-ish
        let cols = Math.ceil(Math.sqrt(n));
        let rows = Math.ceil(n / cols);

        if (rows - cols > 1) {
            [cols, rows] = [rows, cols];
        }

        return [rows, cols];
    }

    get gridStyle(): { [klass: string]: any } {
        const [rows, cols] = this.rowsCols;
        return {
            'grid-template-columns': `repeat(${cols}, 1fr)`,
            'grid-template-rows': `repeat(${rows}, 1fr)`,
        };
    }

    getScaledStyle(name: string): { [key: string]: string } {
        const scale = Math.min(1, MAX_NAME_CHARS_BEFORE_SCALING / name.length);
        return {
            '--scale': scale.toString(),
        };
    }

    get containerHeight(): string {
        if (this.isSmallScreen) {
            const rows = this.rowsCols[0];
            const baseHeight = 40;
            const additionalHeight = (rows - 2) * 10;
            const totalHeight = baseHeight + additionalHeight;
            return `${Math.min(totalHeight, 100)}%`;
        }
        return '50vh';
    }
}
