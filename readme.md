# webstorm-tslint-bug

webstorm loses support for linking when upgrading tslint to 5.1.0.


Expected result:

![Expected result](https://raw.githubusercontent.com/jasekiw/webstorm-tslint-bug/master/screenshots/expected.png)


Actual result

![Actual result](https://raw.githubusercontent.com/jasekiw/webstorm-tslint-bug/master/screenshots/actual.png)

To reproduce expected result switch to branch `expected`.

To repoduce the actual result switch to branch `master`


## The problem
tslint messages are no longer linked in the run panel.

webstorm should add support for these new phrases while also maintaining support for the old syntax.

