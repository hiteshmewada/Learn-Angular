import { Component, computed, effect, Signal, signal, WritableSignal } from "@angular/core";
import { Todos } from "../todos/todos";


@Component({
    selector: "app-profile",
    templateUrl: "./profile.html",
    styleUrls: ["./profile.scss", "../login/login.scss"],
    imports: [Todos]
})

export class Profile {
    count: number = 0;
    number1 = signal<string | number>("hitesh"); // we can add type to signals
    number2: WritableSignal<string | number> = signal("hitesh");
    x: WritableSignal<number> = signal(2);
    y: Signal<number> = signal(3);
    z: Signal<number> = computed(() => this.x() + this.y());
    name: string = "Hitesh Mewada";
    showName: boolean = false;
    constructor() {
        effect(() => {
            console.log("Effect ran! Current value of number1:", this.number1()," x:", this.x(), "y:", this.y(), "z:", this.z());
            if (this.x() === 4) {
                this.showName = true;
            } else {
                this.showName = false;
            }
        });
    }
    onButtonClick(event: Event) {
        // alert("Button clicked!");
        console.log("Button clicked!", event.type);
        console.log((event.target as HTMLElement).className);
    }
    enterName(event: Event) {
        this.name = (event.target as HTMLInputElement).value;
        console.log("Name entered:", this.name);
    }
    enterEmail(val: string) {
        console.log("Email entered:", val);
    }
    students: { name: string; age: number }[] = [
        {
        name: "Hitesh Mewada",
        age: 25
        },
        {
        name: "Yogesh Mewada",
        age: 25
        }
    ];
    signalClick() {
        this.number1.set(this.number1() === "hitesh" ? "yogesh" : "hitesh");
        this.x.update(value => value + 1);
        // can use update methdod also
    }
}
