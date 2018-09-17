import { IProduct } from "./product";
import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipes implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        let pro = value.filter((product:IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
            return filterBy ?  pro : value;
    }
}   