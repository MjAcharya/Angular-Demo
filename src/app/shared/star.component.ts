import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'ai-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    startWidth: number;
    ngOnChanges(): void {
        this.startWidth = (86 / (5 - this.rating));
        console.log(this.startWidth);
    }

    onClick(): void {
        this.ratingClicked.emit('The rating '+ (this.rating) +' was clicked');
    }

}