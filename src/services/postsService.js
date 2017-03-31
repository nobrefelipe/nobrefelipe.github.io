export default class POSTS {

    /**
     * GET POSTS
     * @param url
     * @returns {*}
     */
    get(url){

        // const SITE_REST_URL = 'http://localhost/wptest/wp-json/wp/v2/';
        const SITE_REST_URL = 'https://book-app-1d0bf.firebaseio.com/';

        return $.getJSON( SITE_REST_URL + url)

                .then(function(obj, status, request) {

                    return {obj, status, request};

                });

    };




    /**
     * UPDATE PAGING
     * @param request -> http request so we can get the total number of pages
     * @param paged   -> the next page, updated after the load more is finished
     * @returns {boolean}
     */
    paging(request, paged){

        //total number of pages
        var pages = request.getResponseHeader('X-WP-TotalPages');

        //if last page return true
        if(paged >= pages){

            return true;

        }

    };

};
