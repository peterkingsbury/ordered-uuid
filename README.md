# ordered-uuid

## Introduction

The intent of UUIDs is to enable distributed systems to uniquely identify information without significant central coordination.

However, when storing UUIDs in a database, there is a need for UUIDs to be optimized in a way that allows the database to search, order and index them quickly.

The *ordered-uuid* module implements the results of research by [Karthik Appigatla](https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/), originally based on work done by [Peter Zaitsev](https://www.percona.com/blog/2007/03/13/to-uuid-or-not-to-uuid/). It can typically be used with RDBMSs which allow storage of 16-bit binary fields (e.g. Binary(16) in MySQL/MariaDB). 

## API

### Module Functions

#### generate()

Generate an ordered UUID, and return it as a string.

#### toBinary16(orderedUUID)

Convenience function which intakes an ordered UUID string, and returns it as a hex-encoded Buffer object.

#### fromBinary16(binaryUUID)

Convenience function which intakes a hex-encoded binary Buffer object containing an ordered UUID, decodes it, and returns it as the original ordered-UUID string.

### Examples

    var OrderedUUID = require('ordered-uuid');
    
    var orderedUuid = OrderedUUID.generate();
    // '4352e80c5117dff996296b7531fbc4c0'
    
    var binaryUuid = OrderedUUID.toBinary16(orderedUuid);
    // <Buffer 43 52 e8 0c 51 17 df f9 96 29 6b 75 31 fb c4 c0>
    
    var decodedUuid = OrderedUUID.fromBinary16(binaryUuid);
    // '4352e80c5117dff996296b7531fbc4c0'

## Questions and Issues

For all questions and issues, please open an Issue in GitHub.

## License

Licensed liberally under MIT; see LICENSE for complete license text.
