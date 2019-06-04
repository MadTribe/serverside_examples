Master with one slave replication
Via the older binary log mechanism.
Useful on legacy systems, maybe MS Azure too.


# TODO

1. set up binary logging
2. set up replication to slave.
3. write test to write to master and read from slave.

# Try some edge cases:

What happens when you write to slave? Set slave read-only
What is the latency?
