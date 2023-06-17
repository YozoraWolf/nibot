const ChildProcess = require('child_process');
const Chalk = require('chalk');

function compile(directory, outDir) {
  return new Promise((resolve, reject) => {
    let out = outDir !== '' && outDir !== undefined ? ` --outDir "${outDir}"` : '';
    const tscProcess = ChildProcess.exec(`tsc${out}`, {
      cwd: directory,
    });

    tscProcess.stdout.on('data', data => 
        process.stdout.write(Chalk.yellowBright(`[tsc] `) + Chalk.white(data.toString()))
    );

    tscProcess.on('exit', exitCode => {
      if (exitCode > 0) {
        reject(exitCode);
      } else {
        resolve();
      }
    });
  });
}

module.exports = compile;
