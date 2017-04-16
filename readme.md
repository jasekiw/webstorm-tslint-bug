# webstorm-tslint-bug

webstorm loses support for linking when upgrading tslint to 5.1.0.


Expected result:
tslint messages should be linked to their actual line of code. When the user clicks on the message it
should open the given file at the correct line number.
![Expected result](https://raw.githubusercontent.com/jasekiw/webstorm-tslint-bug/master/screenshots/expected.png)


Actual result

![Actual result](https://raw.githubusercontent.com/jasekiw/webstorm-tslint-bug/master/screenshots/actual.png)

To reproduce expected result switch to branch `expected`.

To reproduce the actual result switch to branch `master`


## The problem
tslint messages are no longer linked in the run panel.

webstorm should add support for 5.1.0 in order to continue supportng tslint

