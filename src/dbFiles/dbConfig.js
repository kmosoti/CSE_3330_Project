const config = {
    user: 'UTAStudent05',
    password: '3asy-123',
    server: "art-gallery.cphddxev4bq9.us-east-2.rds.amazonaws.com",
    database: 'Art Gallery',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'EC2AMAZ-NESG8AC'
    },
    port: 1433
}

module.exports = config;