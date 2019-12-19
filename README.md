# Burger Run 4

This is the 4th run of building burger-builder with react and redux.

## New in this run:

- Git init at the beginning of the project and commit continuously to github.
  1. Inside terminal, git init and git add .
  2. git commit -m "initial commit"
  3. git remote add origin "github-repo-uri"
  4. git push -u origin master.
  5. Go to extensions and search for @builtin git, enable them if not.
  6. VScode's version control menu will work now.
- Use vscode's version control. Learn workflow of:
  1. make changes
  2. stage changes and commit with message.
  3. push (to the github)

## Discovered:

- serviceWorker can (could: in 2018 ) do harm:
  - https://larsgraubner.com/service-workers-considered-harmful/
  - https://www.lucidchart.com/techblog/2019/01/22/what-you-should-know-before-making-a-service-worker/
- The correct way to import lodash (with Benchmark)
  - https://www.blazemeter.com/blog/the-correct-way-to-import-lodash-libraries-a-benchmark/
  - https://stackoverflow.com/questions/35250500/correct-way-to-import-lodash
- React displaces components nested deep in arrays with no prblem.
#TODO:

- Play around with burger ingredient css to understand each property value;