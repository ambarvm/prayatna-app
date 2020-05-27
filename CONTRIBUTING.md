# Contributor Guidelines

## How to set up prayatna-app locally

Follow these guidelines for setting up prayatna-app locally on your system.

### Fork the repository on GitHub

Forking is a step where you get your own copy of the prayatna-app repository (a.k.a repo) on GitHub.

This is essential, as it allows you to work on your own copy of prayatna-app on GitHub, or to download (clone) your repository to work on locally. Later, you will be able to request changes to be pulled into the main repository from your fork via a pull request (PR).

Follow these steps to fork the https://github.com/supercoww/prayatna-app repository:

1. Go to the repository on GitHub: https://github.com/supercoww/prayatna-app

2. Click the "Fork" Button in the upper right-hand corner of the interface.

After the repository has been forked, you will be taken to your copy of the repository at https://github.com/YOUR_USER_NAME/prayatna-app

## Prepare your local machine

**Follow these steps to get your development environment ready:**

1. Install [Git](https://git-scm.com/) or your favorite Git client, if you haven't already. Update to the latest version; the version that came bundled with your OS may be outdated.

2. Install a code editor of your choice.

   We highly recommend using [VS Code](https://code.visualstudio.com/).

3. Set up prettier for your code editor.

   You should have [Prettier running in your editor](https://prettier.io/docs/en/editors.html), and it will format your code according .prettierrc config.

   You should also enable **format on save** if your editor supports it.

4. Install the latest LTS version of [NodeJS](https://nodejs.org/en/download/)
   If Node.js is already installed on your machine, run the following commands to validate the versions:

   ```sh
   node -v
   npm -v
   ```

### Clone your fork from GitHub

[Cloning](https://help.github.com/articles/cloning-a-repository/) is where you **download** a copy of a repository from a `remote` location that is either owned by you or by someone else. In your case, this remote location is your `fork` of prayatna-app's repository that should be available at `https://github.com/YOUR_USER_NAME/prayatna-app`.

Run these commands on your local machine:

1. Open a Terminal / Command Prompt / Shell in your projects directory

   _i.e.: `/yourprojectsdirectory/`_

2. Clone your fork of prayatna-app, replacing `YOUR_USER_NAME` with your GitHub Username

   ```sh
   git clone --depth=1 https://github.com/YOUR_USER_NAME/prayatna-app.git
   ```

   This will download the entire prayatna-app repository to your projects directory.

   > Note: `--depth=1` creates a shallow clone of your fork, with only the most recent history/commit.

## Set up syncing from parent

Now that you have downloaded a copy of your fork, you will need to set up an `upstream` remote to the parent repository.

The main repository is referred `upstream` repository. Your fork referred to as the `origin` repository.

You need a reference from your local clone to the `upstream` repository in addition to the `origin` repository. This is so that you can sync changes from the main repository without the requirement of forking and cloning repeatedly.

1. Change directory to the new prayatna-app directory:

   ```sh
   cd prayatna-app
   ```

2. Add a remote reference to the main prayatna-app repository:

   ```sh
   git remote add upstream https://github.com/supercoww/prayatna-app.git
   ```

3. Ensure the configuration looks correct:

   ```sh
   git remote -v
   ```

   The output should look something like below:

   ```sh
   origin    https://github.com/YOUR_USER_NAME/prayatna-app.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/prayatna-app.git (push)
   upstream    https://github.com/supercoww/prayatna-app.git (fetch)
   upstream    https://github.com/supercoww/prayatna-app.git (push)
   ```

### Configuring dependencies

1. Install dependencies
   This step will install the dependencies required for the application to run:

   ```sh
   npm install
   ```

2. Set up the firebase config file

   Create a new file with the name `firebase.config.html` in the prayatna-app directory. Copy the firebase config object in this file. The file should look like this:

   ```html
   <script>
   	const firebaseConfig = {
   		apiKey: 'api-key',
   		authDomain: 'project-id.firebaseapp.com',
   		databaseURL: 'https://project-id.firebaseio.com',
   		projectId: 'project-id',
   		storageBucket: 'project-id.appspot.com',
   		messagingSenderId: 'sender-id',
   		appId: 'app-id',
   		measurementId: 'G-measurement-id',
   	};
   </script>
   ```

3. Start the development server

   ```sh
   npm start
   ```

   > Once ready, open a web browser and visit http:// localhost:1234/index.html. If the app loads, congratulations – you're all set!

### Making changes locally

You can now make changes to files and commit your changes to your local clone of your fork.

Follow these steps:

1. Validate that you are on the `master` branch:

   ```sh
   git status
   ```

   You should get an output like this:

   ```sh
   On branch master
   Your branch is up-to-date with 'origin/master'.

   nothing to commit, working directory clean
   ```

   If you are not on master or your working directory is not clean, resolve any outstanding files/commits and checkout `master`:

   ```sh
   git checkout master
   ```

2. Sync the latest changes from the prayatna-app upstream `master` branch to your local master branch:

   > WARNING
   >
   > If you have any outstanding pull request that you made from the `master` branch of your fork, you will lose them at the end of this step.
   >
   > You should ensure your pull request is merged by a moderator before performing this step. To avoid this scenario, you should **always** work on a branch other than the `master`.

   This step **will sync the latest changes** from the main repository of prayatna-app. It is important that you rebase your branch on top of the latest `upstream/master` as often as possible to avoid conflicts later.

   Update your local copy of the prayatna-app upstream repository:

   ```sh
   git fetch upstream
   ```

   Hard reset your master branch with the prayatna-app master:

   ```sh
   git reset --hard upstream/master
   ```

   Push your master branch to your origin to have a clean history on your fork on GitHub:

   ```sh
   git push origin master --force
   ```

   You can validate your current master matches the upstream/master by performing a diff:

   ```sh
   git diff upstream/master
   ```

   The resulting output should be empty.

3. Create a fresh new branch:

   Working on a separate branch for each issue helps you keep your local work copy clean. You should never work on the `master`. This will soil your copy of prayatna-app and you may have to start over with a fresh clone or fork.

   Check that you are on `master` as explained previously, and branch off from there:

   ```sh
   git checkout -b branch-name
   ```

   Keep your branch names short, meaningful and unique.

4. Edit pages and work on code in your favorite text editor.
   If you are creating a new page, make a copy of `src/page-template.html` in `src/pages/` and write your code in that file.

5. Once you are happy with the changes you should run prayatna-app locally to preview the changes.

6. Make sure you fix any errors and check the formatting of your changes.

7. Check and confirm the files you are updating:

   ```sh
   git status
   ```

   This should show a list of `unstaged` files that you have edited.

   ```sh
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-prayatna-app-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Stage the changes and make a commit:

   In this step, you should only mark files that you have edited or added yourself. You can perform a reset and resolve files that you did not intend to change if needed.

   ```sh
   git add path/to/my/changed/file.ext
   ```

   Or you can add all the `unstaged` files to the staging area:

   ```sh
   git add .
   ```

   Only the files that were moved to the staging area will be added when you make a commit.

   ```sh
   git status
   ```

   Output:

   ```sh
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-prayatna-app-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ```

   Now, you can commit your changes with a short message like so:

   ```sh
   git commit -m "fix: my short commit message"
   ```

   Optional:

   We highly recommend making a conventional commit message. This is a good practice that you will see on some of the popular Open Source repositories. As a developer, this encourages you to follow standard practices.

   Some examples of conventional commit messages are:

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update contributing guidelines
   ```

   Keep these short, not more than 50 characters. You can always add additional information in the description of the commit message.

   This does not take any additional time than an unconventional message like 'update file' or 'add index.md'

   You can learn more about why you should use conventional commits [here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. If you realise that you need to edit a file or update the commit message after making a commit you can do so after editing the files with:

   ```sh
   git commit --amend
   ```

   This will open up a default text editor like `nano` or `vi` where you can edit the commit message title and add/edit the description.

10. Next, you can push your changes to your fork:

    ```sh
    git push origin branch/name-here
    ```

### Creating a Pull Request

See this article: [Creating a pull request from a fork
](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)
Make sure **Allow edits from maintainers** is selected.
