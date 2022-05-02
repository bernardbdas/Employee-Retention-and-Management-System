const { createHash } = require('crypto');
const { scramsha } = require('sasl-scram-sha-1');

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}

const toHash = "";
console.log(createHash('md5').update(toHash).digest('hex'));
console.log(createHash('sha256').update(toHash).digest('hex'));
console.log(createHash('scram-sha-256').update(toHash).digest('hex'));

//2 fe508fbb5a849964511b0f9cba710b9 - Possible algorithms: MD5, SHA1.Substr(0, 32), MD4, NTLM, md5(md5($plaintext)), md5(md5($plaintext).: .$plaintext), md5(md5(md5($plaintext))), md5(md5(md5(md5($plaintext)))), md5(md5(md5(md5(md5($plaintext))))), md5(strtoupper(md5($plaintext))), md5(sha1($plaintext)), md5(sha1(sha1($plaintext))), md5(sha256($plaintext)), Radmin2, md5(sha1($plaintext).md5($plaintext).sha1($plaintext)), md5(md5($plaintext).substr(8, 16)), Filezilla Server.xml