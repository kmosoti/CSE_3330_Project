import pyodbc 
import json
import logging
import traceback

#Configuration Values
endpoint ='art-gallery.cphddxev4bq9.us-east-2.rds.amazonaws.com'
port=1433
dbuser = 'UTAStudent05'
password = '3asy-123'
database = 'Art Gallery'
driver = 'ODBC Driver 13 for SQL Server'

logger=logging.getLogger()
logger.setLevel(logging.INFO)

def make_connection():
    return pyodbc.connect('DRIVER={'+driver+'};SERVER='+endpoint+';DATABASE='+database+';UID='+dbuser+';PWD='+ password)

def log_err(errmsg):
    logger.error(errmsg)
    return {"body": errmsg , "headers": {}, "statusCode": 400,
        "isBase64Encoded":"false"}

logger.info("Cold start complete.") 

def lambda_handler(event,context):
    query = "SELECT * FROM ARTIST"
    try:
        cnx = make_connection()
        cursor=cnx.cursor()
        
        try:
            cursor.execute(query)
        except:
            return log_err ("ERROR: Cannot execute cursor.\n{}".format(
                traceback.format_exc()) )

        try:
            results_list=[]
            for result in cursor: results_list.append(result)
            print(results_list)
            cursor.close()

        except:
            return log_err ("ERROR: Cannot retrieve query data.\n{}".format(
                traceback.format_exc()))

        res_json = {"body": results_list, "headers": {}, "statusCode": 200,"isBase64Encoded":"false"}
        print(res_json)
        return results_list

    
    except:
        return log_err("ERROR: Cannot connect to database from handler.\n{}".format(
            traceback.format_exc()))


    finally:
        try:
            cnx.close()
        except: 
            pass 

if __name__== "__main__":
    lambda_handler(None,None)