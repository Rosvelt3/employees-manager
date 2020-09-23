class Departments {
  API = process.env.REACT_APP_API + "/departments";

  async getAllDepartments() {
    try {
      const response = await fetch(`${this.API}`);
      if (response.status !== 200) {
        return false;
      }
      const departments = await response.json();
      return departments.data;
    } catch (err) {
      throw err;
    }
  }

  async getSingleDepartment(id) {
    try {
      const response = await fetch(`${this.API}/${id}`);
      if (response.status !== 200) {
        throw new Error("Error getting department");
      } else {
        const department = await response.json();
        return department.data;
      }
    } catch (err) {
      throw err;
    }
  }

  async addSingleDepartment(name, description, location, phoneExtension, actions) {
    try {
      const response = await fetch(
        `${this.API}`,
        {
          method: 'post',
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, description, location, phoneExtension, actions })
        }
      )
      if (response.status !== 201 && response.status !== 400) {
        throw new Error("Error adding department");
      } else if (response.status === 400) {
        throw new Error("Fill all the fields");
      } else {
        const department = await response.json();
        return department.data;
      }
    } catch (err) {
      throw err;
    }
  }

  async deleteDepartment(id) {
    try {
      const response = await fetch(
        `${this.API}/${id}`,
        {
          method: 'delete',
          credentials: 'include'
        }
      );
      if (response.status !== 200) {
        throw new Error("Error deleting department");
      } else {
        const result = await response.json();
        return result;
      }
    } catch (err) {
      throw err;
    }
  }

  async updateSingleDepartment(id, name, description, location, phoneExtension, actions) {
    try {
      const response = await fetch(
        `${this.API}/${id}`,
        {
          method: 'put',
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, description, location, phoneExtension, actions })
        }
      )
      if (response.status !== 200) {
        throw new Error("Error updating department");
      } else {
        const department = await response.json();
        return department.data;
      }
    } catch (err) {
      throw err;
    }
  }
}

export default Departments;