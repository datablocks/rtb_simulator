function config() {
	
	return {
		max_running: 51,
		invalid_body_percent: 1,
		feed_url: 'http://144.202.27.46/openrtb/?response_time=300&timeout_percent=2&coverage_percent=30&response_header_error_percent=5&response_json_error_percent=1&no_response_percent=10',
		base_imp_url: 'https://impression.v6test.datablocks.net/i/',
		imp_fetch_percent: 80
	}
}
module.exports = config;
