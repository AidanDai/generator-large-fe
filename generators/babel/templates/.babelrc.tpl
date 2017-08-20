{
    "presets": [
        [
            "es2015",
            {
                "modules": false
            }
        ],
        [
            "react"
        ]
    ],
    "plugins": [
        "transform-runtime",
        [
            "import",
            {
                "style": "true",
                "libraryName": "<%= component %>"
            }
        ]
    ]
}
