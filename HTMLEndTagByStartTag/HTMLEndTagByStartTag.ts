function HTMLEndTagByStartTag(startTag: string): string {
    const splitString = startTag.split(' ');
    const splitTag = splitString[0].toString().split('');
    let endTag = '</';
    for (let i = 1; i < splitTag.length; i ++) {
        endTag += splitTag[i];
    }
    endTag = endTag[endTag.length - 1] === '>' ? endTag : endTag += '>';
    return endTag;
}

console.log(HTMLEndTagByStartTag("<button type='button' disabled>")); // DEVUELVE </button>
console.log(HTMLEndTagByStartTag("<i>")); // DEVUELVE </i>
console.log(HTMLEndTagByStartTag("<html>")); // DEVUELVE </html>
console.log(HTMLEndTagByStartTag("<div>")); // DEVUELVE </div>
