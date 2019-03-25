var smartgrid = require('smart-grid');

var settings = {
    outputStyle: 'sass', 
    columns: 12, 
    offset: '30px', 
    mobileFirst: false, 
    container: {
        maxWidth: '1280px', 
        fields: '30px' 
    },
    oldSizeStyle: false,
	properties: []
};

    smartgrid('./sass', settings);