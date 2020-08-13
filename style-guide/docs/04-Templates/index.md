---
title: Templates
label: Templates
---

{{#templateList}}
<a href="{{path '/components/preview/{{ this.handle }}' }}">{{ this.title }}</a>
{{/templateList}}