# ordered-uuid

## Introduction

The intent of UUIDs is to enable distributed systems to uniquely identify information without significant central coordination.

However, when storing UUIDs in a database, there is a need for UUIDs to be optimized in a way that allows the database to search, order and index them quickly.

The *ordered-uuid* module implements the results of research by (Karthik Appigatla)[https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/], originally based on work done by (Peter Zaitsev)[https://www.percona.com/blog/2007/03/13/to-uuid-or-not-to-uuid/]. It can typically be used with RDBMSs which allow storage of 16-bit binary fields (e.g. Binary(16) in MySQL/MariaDB). 

## API



## Questions and Issues



## License

Licensed liberally under MIT; see license.txt for complete license text.

