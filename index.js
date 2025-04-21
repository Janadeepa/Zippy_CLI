#!/usr/bin/env node

const { program } = require("commander");
const chalk = require("chalk");

program
  .name("zippy")
  .description("⚡ A fast and minimal CLI to boost your workflow")
  .version("1.0.0");

program
  .command("init")
  .description("Initialize a new project")
  .action(() => {
    console.log(chalk.green("🚀 Zippy project initialized!"));
  });

program
  .command("run")
  .description("Run your Zippy task")
  .action(() => {
    console.log(chalk.blue("🏃 Running Zippy task..."));
  });

program.parse(process.argv);
