const fetch  = require( 'node-fetch' );
const moment = require( 'moment' );
const URLSearchParams = require('url-search-params');

const searchTerm = 'banana';
const subreddits = [ 'askreddit' ];
const after      = moment().subtract( 1, 'year' );
const before     = moment();

const params = new URLSearchParams();

params.append( 'before', before.unix() );
params.append( 'after', after.unix() );
params.append( 'subreddits', subreddits.join( ',' ) );
params.append( 'q', searchTerm );
params.append( 'aggs', 'created_utc' );
params.append( 'frequency', 'day' );

const url = `https://api.pushshift.io/reddit/comment/search?${params.toString()}`;

const results = fetch( url )
	.then( res => res.json() )
	.then( json => console.log(json) );
