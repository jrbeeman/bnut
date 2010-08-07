I wrote this module a couple of years ago for a Drupal 5.x site that had
to run several bulk updates on nodes tens of thousands of nodes and
hundreds of thousands of comments. Drupal 5.x didn't yet have the nice
bulk operations API that Drupal 6.x does, so I wrote this module to
provide some pseudo-batch API functionality for performing the following
operations:

- Rebuild the node access table
- Rebuild the node comment statistics table


