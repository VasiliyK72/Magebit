export default {
  render(templateName, data) {
      templateName = templateName + 'Template';
      
      const templateElement = document.getElementById(templateName);
      const templateSource = templateElement.innerHTML;
      
      console.log(templateElement);
      
      const renderFn = Handlebars.compile(templateSource);
      
      return renderFn(data);
  }  
};