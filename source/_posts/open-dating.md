---
title: OpenDating
sublayout: basic
thumbnail: /images/thumbnails/opendating.jpg
icons:
  - name: OpenDating
    image: /images/icons/opendatingcolor.png
    url: null
help_link: https://github.com/jl33-ai/OpenDating
type: project
date: 2025-01-01 17:09:31
tags:
description: Dating as an API
categories:
#redirect_url: /static/open-dating
mau: 27
photos:
permalink: /opendating/
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.8/swagger-ui.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.8/swagger-ui-bundle.min.js"></script>
<script>
    window.onload = () => {
        window.ui = SwaggerUIBundle({
            url: 'https://raw.githubusercontent.com/jl33-ai/OpenDating/refs/heads/main/docs/api-spec.yaml',
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIBundle.SwaggerUIStandalonePreset
            ],
        });
    };
</script>

<div id="swagger-ui"></div>

[//]: # (OpenDating is a headless dating app which is only accessible via. REST API.)

[//]: # ()
[//]: # (You can either build your own frontend, or simply use the REST api. )

[//]: # ()
[//]: # (OpenDating:)

[//]: # (- All males)

[//]: # (- But over certain level of iq)