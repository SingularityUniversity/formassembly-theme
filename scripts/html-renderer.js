
class HTMLRenderer {
    /**
     * @param {Document} template  XSL document, for XSLTransformation of the form's XML.
     */
    constructor(template) {
        this.processor = new XSLTProcessor();
        this.template = template;
        this.fragment = null;
    }

    /**
     * @param {object} form         FormAPI's Form object.
     * @param {object} parameters   List of parameters to pass to the XSLTransformation.
     *                              Applicable parameters are defined in the XSL document.
     * @return {DocumentFragment}   A Promise resolving to the Form's HTML
     */
    async render(form, parameters = {}) {
        // Prepare XSLT processor
        if(typeof this.processor.reset === 'function') { this.processor.reset(); /* not in ie */ }
        this.processor.importStylesheet(this.template);

        // Set XSL stylesheet parameters
        for (let paramName in parameters) {
            this.processor.setParameter("", paramName, parameters[paramName]);
        }
        // XSLTransformation
        this.fragment = this.processor.transformToFragment(form.doc, window.document);
        return this;
    }

    serialize() {
        const serializer = new XMLSerializer();
        return serializer.serializeToString(this.fragment).replace(/&amp;/g, '&');
    }
}
