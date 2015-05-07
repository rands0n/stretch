module.exports = {

    //

    templateData: {
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