export function Spinner(target:Function): void{
    target.prototype.spinner=function(): void{
        console.log('Spinner html');
    }
}