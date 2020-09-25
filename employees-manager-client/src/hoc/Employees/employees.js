class Employees {
  API = process.env.REACT_APP_API + "/employees";

  async getAllEmployees() {
    try {
      const response = await fetch(`${this.API}`);
      if (response.status !== 200) {
        throw new Error("Error getting employees");
      }
      const employees = await response.json();
      return employees.data;
    } catch (err) {
      throw err;
    }
  }

  async getSingleEmployee(id) {
    try {
      const response = await fetch(`${this.API}/${id}`);
      if (response.status !== 200) {
        throw new Error("Error getting employee");
      } else {
        const employee = await response.json();
        return employee.data;
      }
    } catch (err) {
      throw err;
    }
  }

  async addSingleEmployee(idNumber, name, lastName, phone, department) {
    try {
      const response = await fetch(
        `${this.API}`,
        {
          method: 'post',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ idNumber, name, lastName, phone, department })
        }
      )
      if (response.status !== 201 && response.status !== 400) {
        throw new Error("Error adding employee");
      } else if (response.status === 400) {
        throw new Error("Fill all the fields");
      } else {
        const employee = await response.json();
        return employee.data;
      }
    } catch (err) {
      throw err;
    }
  }

  async deleteEmployee(id) {
    try {
      const response = await fetch(
        `${this.API}/${id}`,
        {
          method: 'delete'
        }
      );
      if (response.status !== 200) {
        throw new Error("Error deleting employee");
      } else {
        const result = await response.json();
        return result;
      }
    } catch (err) {
      throw err;
    }
  }

  async updateSingleEmployee(id, idNumber, name, lastName, phone, department) {
    try {
      const response = await fetch(
        `${this.API}/${id}`,
        {
          method: 'put',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ idNumber, name, lastName, phone, department })
        }
      )
      if (response.status !== 200) {
        throw new Error("Error updating employee");
      } else {
        const employee = await response.json();
        return employee.data;
      }
    } catch (err) {
      throw err;
    }
  }
}

export default Employees;