function joinedLogger(level, separator) {
    return function(...messages) {
      const filteredMessages = messages.filter(msg => msg.level >= level);
      const joinedText = filteredMessages.map(msg => msg.text).join(separator);
      process.stdout.write(joinedText + '\n');
    };
  }
  
  function main() {
    const level = 15;
    const separator = ';';
  
    const messages = [
      { level: 10, text: 'foo' },
      { level: 20, text: 'bar' },
      { level: 30, text: 'baz' }
    ];
  
    const myLog = joinedLogger(level, separator);
    myLog(...messages);
  }
  
  main();