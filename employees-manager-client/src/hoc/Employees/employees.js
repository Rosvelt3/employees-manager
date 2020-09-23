class Employees {
  API = process.env.REACT_APP_API + "/employees";

  async getAllEmployees() {
    try {
      const response = await fetch(`${this.API}`);
      if (response.status !== 200) {
        return false;
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

  async addSingleEmployee(idNumber, name, description, location, phoneExtension, actions) {
    try {
      const response = await fetch(
        `${this.API}`,
        {
          method: 'post',
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ idNumber, name, description, location, phoneExtension, actions })
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
          method: 'delete',
          credentials: 'include'
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

  async updateSingleEmployee(id, idNumber, name, description, location, phoneExtension, actions) {
    try {
      const response = await fetch(
        `${this.API}/${id}`,
        {
          method: 'put',
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ idNumber, name, description, location, phoneExtension, actions })
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