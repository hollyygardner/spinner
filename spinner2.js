process.stdout.write('hello from spinner1.js... \rheyyy\n');

  setTimeout() => {
    process.stdout.write('\r|   ');
    setTimeout(() => {
      process.stdout.write('\r/   ');
      setTimeout(() => {
        process.stdout.write('\r-   ');
        setTimeout(() => {
          process.stdout.write('\r\\   ');
          setTimeout(() => {
            process.stdout.write('\r|   ');
            setTimeout(() => {
              process.stdout.write('\r/   ');
              setTimeout(() => {
                process.stdout.write('\r-   ');
                setTimeout(() => {
                  process.stdout.write('\r//   ');
                  setTimeout(() => {
                    process.stdout.write('\r\|  \n');
                 }, 1700)
               }, 1500)
             }, 1300) 
          }, 1100)
        }, 900);
      }, 700);
    }, 500);
  }, 300);
}, 100);
