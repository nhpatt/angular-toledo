export class Option {

    private status:OptionStatus;
    private image:string =
        'https://news.ycombinator.com/grayarrow2x.gif1';

    constructor(public name, public description?, public votes = 0) {
    }
}

enum OptionStatus { Abandoned, Active }