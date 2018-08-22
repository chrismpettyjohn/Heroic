import Log from '@/lib/log'
import Worker from 'cluster'
import Heroic from '@/heroic'
import Config from '@/config/system'

// Clear Console
process.stdout.write('\x1B[2J\x1B[0f')

// Handle primary course
if (Worker.isMaster) {
  for (let i = 0; i < Config.advanced.workers; i++) {
    Worker.fork()
  }
} else {
  Heroic.init()
}

// Event managers
Worker.on('online', worker => {})

Worker.on('exit', (worker, code, signal) => {
  Log.push('System', '*', `Worker process ${Worker.worker.id} has stopped`, 'info')
})
