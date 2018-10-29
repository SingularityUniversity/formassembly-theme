
class PreviewForm extends TestForm {
    constructor() {
        super();
        this.setId('tfa_1200'); // prevent ID collision with other forms on the same preview page.
        this.setTitle("Theme Dev Kit - <em>Text Formatting</em>");

        this.append(new HTML())
            .setContent('<h4>Heading with <em>emphasis</em> <b>and bold</b></h4>');
        this.append(new Field())
            .setLabel('Field label with <em>emphasis</em> and <b>bold</b>');

        this.append(new HTML())
            .setContent('<h4>Paragraph</h4>');

        this.append(new HTML())
            .setContent(this.loremIpsum(25));

        this.append(new HTML())
            .setContent(
                ' <b>Bold Text</b> - ' +
                ' <i>Italic Text</i> - ' +
                ' <u>Underlined Text</u> - ' +
                ' <a href="#" target="_blank">Link</a>.'
            );


        this.append(new HTML())
            .setContent(
                ' <div style="text-align:left">This is left-aligned.</div>'
                + '<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">This is indented.</blockquote>'
                + '<div style="text-align:center">This is centered</div>'
                + '<div style="text-align:right">This is right-aligned.</div>'
                + '<ol><li>This is list item 1</li><li>This is list item 2</li></ol></div>'
                + '<ul><li>This is list item 1</li><li>This is list item 2</li></ul></div>'
            );

        this.append(new HTML())
            .setContent(
                '<img src="https://www.formassembly.com/content/uploads/2017/05/Full-Color_Logo.png" alt="FormAssembly Logo" width="150" style="max-width:100%" />'
                + '<br/>FormAssembly Logo (150px wide)'
            );
    }
}