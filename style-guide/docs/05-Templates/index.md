---
title: Templates
label: Templates
---

Templates for typical pages types have been created as a starting point.

{{#templateList}}
<a href="{{path '/components/preview/{{ this.handle }}' }}">{{ this.title }}</a>
{{/templateList}}