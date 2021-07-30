export class Transactions {
    description: string;
    category: string;
    date: string;
    type: string;
    value: number;


    constructor(description: string, category: string, date: string, type: string, value: number) {
        this.description = description;
        this.category = category;
        this.date = date;
        this.type = type;
        this.value = value;
    }

}
