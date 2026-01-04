import { Page } from "@playwright/test";
import { Performable } from "../interactions/performable";

export class Actor{
    private readonly name: string;
    private readonly page: Page;

    constructor(name: string, page: Page) {
        this.name = name;
        this.page = page;

    }
    
        static named(name: string, page: Page): Actor {
            return new Actor(name, page);
        }

        async attemptsTo(...tasks: Performable[]): Promise<void> {
            for (const task of tasks) {
                await task.performAs(this);
            }
        }
    

        getPage(): Page {
            return this.page;
        }

        getName(): string {
            return this.name;
        }
    
}