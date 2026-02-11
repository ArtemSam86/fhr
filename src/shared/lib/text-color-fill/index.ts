interface IMaskTag {
  start: string;
  end: string;
}

interface ITextColorFill {
  fill: (text: string, searchValue: string) => string;
}
export class TextColorFill implements ITextColorFill {
  private maskTag: IMaskTag;

  constructor(maskTag?: IMaskTag) {
    this.maskTag = maskTag || {
      start: '<p class="text-color-fill">',
      end: '</p>',
    };
  }

  private masked(str: string) {
    return `${this.maskTag.start}${str}${this.maskTag.end}`;
  }

  private unmasked(str: string) {
    return str
      .split(this.maskTag.start)
      .join('')
      .split(this.maskTag.end)
      .join('');
  }

  fill(text: string, searchValue: string) {
    const txt = this.unmasked(text);

    if (!searchValue) return txt;

    const mask = this.masked(searchValue);
    return txt.split(searchValue).join(mask);
  }
}
