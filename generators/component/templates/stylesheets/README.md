<% if (moduleName && componentName) { %>
# stylesheets of <%= componentName %> <%= type %> component in <%= moduleName %> module 
<% } %>
<% if (!moduleName) { %>
# stylesheets of <%= componentName %> <%= type %> component in project
<% } %>
