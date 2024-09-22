/**
    Apollo Server can fetch data from any source you connect to (including a database, a REST API, 
    a static object storage service, or even another GraphQL server). For the purposes of this 
    tutorial, we'll hardcode our example data.
 */
export const books = [
    {
        id: 1,
        title: 'The Awakening',
        author: 'Kate Chopin',
        publishedYear: 2010
    },
    {
        id: 2,
        title: 'City of Glass',
        author: 'Paul Auster',
        publishedYear: 2020
    },
];

export default books;