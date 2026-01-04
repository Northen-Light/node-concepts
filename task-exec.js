// one task -> process.nextTick, queueMicrotask, another task -> process.nextTick, queueMicrotask
setTimeout(() => {
    console.log('macro task queue cb-1')
    for (let i = 10; i < 20; i++) queueMicrotask(() => console.log(`micro task queue cb-${i}`));
    for (let i = 10; i < 20; i++) process.nextTick(() => console.log(`process nextTick cb-${i}`));
    for (let i = 100; i < 120; i++) setImmediate(() => console.log(`setImmediate cb-${i}`));
});
setTimeout(() => console.log('macro task queue cb-2'), 0);

// eventLoop flushes entire queue
for (let i = 0; i < 10; i++) queueMicrotask(() => console.log(`micro task queue cb-${i}`));

// eventLoop flushes entire queue
for (let i = 0; i < 10; i++) process.nextTick(() => console.log(`process nextTick cb-${i}`));

// eventLoop flushes entire queue once queues of process.nextTick, microtask, macrotask is empty
setImmediate(() => console.log('setImmediate cb-1'));
for (let i = 0; i < 100; i++) setImmediate(() => console.log(`setImmediate cb-${i}`));
