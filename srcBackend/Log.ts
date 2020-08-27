import chalk from 'chalk';

export class Log {
  static cache(msg: string): void {
    console.log(chalk.red(`CACHED: ${msg}`));
  }

  static send(msg: string): void {
    console.log(chalk.blue(`SENT: ${msg}`));
  }

  static compute(msg: string): void {
    console.log(chalk.green(`COMPUTED: ${msg}`));
  }

  static init(msg: string): void {
    console.log(chalk.yellow(`INITIALIZED: ${msg}`));
  }
}
