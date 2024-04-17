import {Company} from "./company.model";

export interface Vacancy {
    id: number;
    name: string;
    description: string;
    salary: number;
    company: Company;
}
