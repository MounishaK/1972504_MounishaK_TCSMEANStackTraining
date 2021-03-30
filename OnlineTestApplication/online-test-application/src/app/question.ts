import { TestQuestions } from './testquestions.model';

export class Question {
    id: number;
    name: string;
    questionTypeId: number;
    options: TestQuestions[];
    answered: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new TestQuestions(o));
        });
    }
}