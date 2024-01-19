# Syntax 286: Git Fundamentals

## What is Git?
Git is a version control system, where you can create a repository that can track changes made and keep multiple versions of your code.  
With Git, you can roll back the version in case you make a wrong move. Essentially a "save state" in a video game.

Lets teams collaborate easier when multiple people working on the code at once.

## Commands to remember
```git init``` to create a repository (stored locally until uploaded to GitHub or some other remote location)  

```git add``` adding "-p" to the end allows to review changes before committed. adding a "." flag adds everything in the folder, and "-A" flag adds only what git is tracking.

```git commit``` and a ```-m``` flag should accompany a message that show what has changed.

```git remote add origin``` and then paste the string an online code repository sends you then ```git push nameofbranch``` to push your changes to the online code repository.

```git pull``` will bring down all the changes created onto your local computer, but does not redownload the entire repo.

```git clone``` and the URL of the repo grabs the entire repo onto your local computer

```git checkout``` creates a new branch of the repo, in case you want to work on a specific feature to be merged later.

```git merge``` merges different branches together (watch out for merge conflicts)

```git fetch``` gets everything from the branch into a "staging area" where you could collaborate on a branch with someone else at the same time. Can also be used to cherrypick specific lines of code.

```git stash``` just "sweeps up" your changes under the rug. adding ```apply``` tries to merge it back into the repo.

```git fork``` isnt actually part of Git, but allows you to create your own version of the repo, useful if you do not have permissions to change the repositiory you forked off from. Basically just creating another road that adds a new feature that is not part of the main repo.

## Merge v. pull request
```git merge``` attempts to merge two repos together, and a pull request is basically "requesting" code to be added to the repo.

## Other things to remember

For unintentionally tracked files, use a git ignore file so you do not accidentally track files that do not need to be tracked.
If files need to be deleted, use ```git rm -r``` an alias is provided as well:
```alias gri="git ls-files --ignored --exclude-standard | xargs -0 git rm -r"```

