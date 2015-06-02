module.exports = {

    //

    templateData: {
        site: {
            title: "stretch",
            description: "A collection of LESS variables, mixins, functions and helpers",
            url: "http://randsonjs.github.io/stretch",
            image: "http://randsonjs.github.io/stretch/images/stretch.svg"
        },

        /* Helpers
        ===================================================================== */

        /* Development Environment
        ===================================================================== */
        environments: {
            development: {
                templateData: {
                    site: {
                        url: "http://localhost:9778"
                    }
                }
            }
        },

        /* Collections
        ===================================================================== */
        collections: {

        },

        /* Plugins Configurations
        ===================================================================== */
        plugins: {
            grunt: {
                writeAfter: false,
                generateAfter: ["default"]
            },

            ghpages: {
                deployBranch: 'gh-pages'
            },

            cleanurls: {
                static: true,
                trailingSlashes: true
            }
        }
    }
}
