# ![Doot App](doot3.png)

You can view a demo of the app at [Demo](https://youtu.be/7N-6w4veePI)

## Technologies Used:

- Java Springboot
- IBM db2 service
- IBM cloud application development platform
- IBM continuous delivery
- React JS	


### Getting started


To get the application running locally, follow the steps:

## BackEnd:
**To Building Locally**

To get started building this application locally, you can either run the application natively or use the [IBM Cloud Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) for containerization and easy deployment to IBM Cloud.


* [Maven](https://maven.apache.org/install.html)
* Java 8: Any compliant JVM should work.
  * [Java 8 JDK from Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
  * [Java 8 JDK from IBM (AIX, Linux, z/OS, IBM i)](http://www.ibm.com/developerworks/java/jdk/),
    or [Download a Liberty server package](https://developer.ibm.com/assets/wasdev/#filter/assetTypeFilters=PRODUCT)
    that contains the IBM JDK (Windows, Linux)

To build and run an application:

- `mvn install`
- `java -jar ./target/javaspringapp-1.0-SNAPSHOT.jar`

To run an application in Docker use the Docker file called `Dockerfile`. If you do not want to install Maven locally you can use `Dockerfile-tools` to build a container with Maven installed.

You can verify the state of your locally running application using the Selenium UI test script included in the `scripts` directory.

## Front End
**To get the frontend running locally:**

Clone this repository and go inside src/main/resources/my-app.
npm install to install all required dependencies
npm start to start the local server (this project uses create-react-app)


- Local web server will use port 3000 .
- Here the backend apis are run on port 8080 , since Chrome doesn't allow us to access apis directly , 
We need to configure the package.json file by specifying "proxy" : 8080 , if your apis run on some other port make changes to the value of proxy 

- Run npm clean install (install the package dependencies specified in package.json)

- Run npm start (which starts the server)

-Access NGO side by localhost:3000/Donor 

-Access User side by localhost:3000/### Making requests to the backend API


#### Functionality overview

This a React based web app which connects 3 kinds of stakeholders (Help seekers , providers and helpers) The purpose of this application can be understood here : [Demo](https://youtu.be/7N-6w4veePI)


**General functionality:**
1. Register page for NGOS
2. Create tokens and track requests for users 
3. Functionality for NGOs to accept or decline the requests 
4. Posting of event by an NGO and viewing the same by user 
5. A view where you are presented with information of various NGOs and you can donate them

<br />

