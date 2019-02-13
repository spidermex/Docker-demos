var dbPass = "mysql"
var clusterName = "devCluster"

try {
  print('Setting up InnoDB cluster...\n');
  shell.connect('root@db1:3306', dbPass)
  var cluster = dba.createCluster(clusterName);
  print('Adding instances to the cluster.');
  cluster.addInstance({user: "root", host: "db2", password: dbPass})
  print('.');
  cluster.addInstance({user: "root", host: "db3", password: dbPass})
  print('.\nInstances successfully added to the cluster.');
  print('\nInnoDB cluster deployed successfully.\n');
} catch(e) {
  print('\nThe InnoDB cluster could not be created.\n\nError: ' + e.message + '\n');
}
