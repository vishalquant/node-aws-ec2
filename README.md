# node-aws-ec2
Ref: https://www.youtube.com/watch?v=Buh3GjHPmjo

Steps:

1) Create a nodejs application
2) Create a appspec.yml file with information about ec2 machine and the hooks which will get executed on EC2 machine
3) Create scripts according to the hooks mentioned in yaml file.


AWS:
1) Setup 2 Roles 
    1.1) AWSCodeDeploy role for EC2 aws service (AmazonEC2RoleforAWSCodeDeploy)
    1.2) CodeDeploy role for CodeDeploy aws service (AWSCodeDeployRole)
2) Create EC2 instance and assign EC2 role(created at step 1.1 in aws) for code deploy
    2.1) Add Script in User Data in Advance Details Section
         /*
         #!/bin/bash
        sudo yum -y update
        sudo yum -y install ruby
        sudo yum -y install wget
        cd /home/ec2-user
        wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
        sudo chmod +x ./install
        sudo ./install auto
         */
    2.2) Add Tags. This is important, use 'Name' as key and u can set value anything u want. But this is important as this name will be used when we will configure CodeDeploy service.
    2.3) Allow Ports as per your requirement, HTTP 80 and TCP 3000(node js application port)
3) Go to CodeDeploy and create Application and inside application create a Deployment Group
4) Create pipeline
    4.1) Choose Github as source provider
    4.2) Connect your pipeline with the github and choose appropriate repository


Once you connect your pipeline and deploy it then we can check by browising our ec2 address on web with port number

    